export interface Orderable {
  id: string;
  order?: number;
}

function identifyOrder<O extends Orderable>(items: O[]): O[] {
  let counter = 0;

  items.sort((a, b) => {
    counter++;
    return (a.order || counter) - (b.order || counter + 1);
  });

  return resetOrder(items);
}

function resetOrder<O extends Orderable>(items: O[]): O[] {
  return items.map((item, index) => {
    item.order = index + 1;
    return item;
  });
}

export class OrderedSet<O extends Orderable> extends Set<O> {
  public constructor(items?: O[], resetItemOrder = true) {
    super(
      resetItemOrder ? resetOrder(items || []) : identifyOrder(items || [])
    );
  }

  public find(id: string): O | undefined {
    const items = Array.from(this);

    const index = items.findIndex((item) => item.id === id);

    return items[index];
  }

  public set(items: O[], resetItemOrder = false): this {
    this.clear();

    (resetItemOrder ? resetOrder(items) : identifyOrder(items)).forEach(
      (item) => this.add(item)
    );

    return this;
  }

  public add(item: O): this {
    const order = item.order || this.size + 1;

    const existingItem = this.find(item.id);
    if (!!existingItem) {
      this.delete(existingItem);
    }

    if (order > this.size) {
      item.order = this.size + 1;
      return super.add(item);
    }

    return this.set([...[item], ...Array.from(this)]);
  }

  public delete(item: O): boolean {
    return super.delete(this.find(item.id) || item);
  }
}
