const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();

    expect(queue).toEqual({ elements: [] });
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');

    expect(queue.size()).toBe(2);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.add('banana');

    expect(queue.elements).toEqual(['banana']);
  });

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('primeiro');
    queue.add('segundo');

    expect(queue.peek()).toBe('primeiro');
  });

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('A');
    queue.add('B');

    const removido = queue.dequeue();

    expect(removido).toBe('A');
    expect(queue.elements).toEqual(['B']);
  });
});
