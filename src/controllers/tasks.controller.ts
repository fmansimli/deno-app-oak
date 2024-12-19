import type { RouterContext } from "@oak/oak";
import { v4 } from "@std/uuid";

import { Task } from "../entities/task.entity.ts";
import { NotFoundError } from "../errors/index.ts";
import { BadRequestError } from "../errors/bad-request.error.ts";

export function getAll(ctx: RouterContext<string>) {
  const data = localStorage.getItem("tasks");

  let tasks: Task[] = data ? JSON.parse(data) : [];
  tasks = tasks.map((task) => new Task(task));

  ctx.response.body = {
    data: { tasks },
    meta: {
      ip: ctx.request.ip,
      url: ctx.request.url,
    },
  };
}

export function getById(ctx: RouterContext<string>) {
  const id = ctx.params.id;

  const isValid = v4.validate(id);

  if (!isValid) {
    throw new BadRequestError("Invalid UUID");
  }

  const data = localStorage.getItem("tasks");
  const tasks: Task[] = data ? JSON.parse(data) : [];

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  ctx.response.body = {
    data: { task },
    meta: {
      ip: ctx.request.ip,
      url: ctx.request.url,
    },
  };
}

export async function create(ctx: RouterContext<string>) {
  const attrs = await ctx.request.body.json();

  const data = localStorage.getItem("tasks");
  const tasks: Task[] = data ? JSON.parse(data) : [];

  const task = new Task(attrs);
  task.id = crypto.randomUUID();

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  ctx.response.status = 201;
  ctx.response.body = {
    data: { task },
    meta: {
      ip: ctx.request.ip,
      url: ctx.request.url,
    },
  };
}
export async function updateById(ctx: RouterContext<string>) {
  const id = ctx.params.id;

  const attrs = await ctx.request.body.json();

  const data = localStorage.getItem("tasks");
  const tasks: Task[] = data ? JSON.parse(data) : [];

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  Object.assign(task, attrs);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  ctx.response.body = {
    data: { task },
    meta: {
      ip: ctx.request.ip,
      url: ctx.request.url,
    },
  };
}
export function deleteById(ctx: RouterContext<string>) {
  const id = ctx.params.id;

  const data = localStorage.getItem("tasks");
  let tasks: Task[] = data ? JSON.parse(data) : [];

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    throw new NotFoundError("Task not found");
  }

  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  ctx.response.status = 200;
  ctx.response.body = {
    data: { task },
    meta: {
      ip: ctx.request.ip,
      url: ctx.request.url,
    },
  };
}
