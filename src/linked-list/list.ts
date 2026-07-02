import { Node } from './node';

type whereToPush = 'default' | 'heap' | 'tail' | 'after';

export class LinkedList {
  private head: undefined;
  private tail: undefined;
  private count: undefined;

  //получить данные ноды по первому вхождению
  public getNode(key?: number, value?: unknown): Node {}

  //добавить новую ноду и место куда надо ее вставить (id)
  public add(value: unknown, whereToPush: whereToPush, after? : number) {}

  //удалить удаляемую ноду по значению по первому вхождению
  public delete() {}

  // обновить обновляемую ноду по первому вхождению
  public update() {}

  //добавление в начало

  private prepend(data: unknown) {}
  // добавление в середину
  private insertAfter(data: unknown, key: number) {}
  // добавление в конец
  private append(data: unknown) {}

  //удаление из начала
  private deleteHead() {}
  // удаление из середины
  private deleteAfter() {}
  // удаление из конца
  private deleteTail() {}

  //сортировка ?
  public sort() {}

  // по ключу
  private sortByKey() {}
  // по данным
  private sortByData() {}
  // по типу данных
  private sortByType() {}

  //filter
  public filter() {}

  // по ключу
  private filterByKey() {}
  // по данным
  private filterByData() {}
  // по типу данных
  private filterByType() {}

  // проверка типизации
  private isNumber() {}

  private isString() {}

  private isObject() {}

  private isBool() {}

  //проверка null | indefined
  private isNullOrUndefined() {}

  //проверка существования ключей
  private isKeyExists() {}
}
