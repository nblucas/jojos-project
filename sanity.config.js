import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import blogSchema from "./sanity/schemas/blog-schema";

const config = defineConfig({

    projectId: "6ag3y1y9",
    dataset: "production",
    title: "Jojos",
    apiVersion: "2023-08-02",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: [blogSchema] }

});

export default config;