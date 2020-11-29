import { writable } from "svelte/store";

export const brokersStore = writable([]);

export const selectedBrokerStore = writable(null);
