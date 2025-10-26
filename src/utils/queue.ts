// Message Queue placeholder for Farcaster Bot (Phase 2)
export class MessageQueue<T> {
  private queue: T[] = [];
  add(item: T) {
    this.queue.push(item);
    console.log(`🧩 queue: +1 item (size=${this.queue.length})`);
  }
  next(): T | undefined {
    const item = this.queue.shift();
    if (item) console.log(`🧩 queue: -1 item (size=${this.queue.length})`);
    return item;
  }
  size() {
    return this.queue.length;
  }
}
