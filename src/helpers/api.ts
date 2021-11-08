import axios from "axios";

export default function api() {
  const api = axios.create();
  return api;
}
