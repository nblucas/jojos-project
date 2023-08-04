"use client";

import "@/public/static/css/styles.css"

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config.js";

export default function AdminPage() {
    return <NextStudio config={config} />;
}