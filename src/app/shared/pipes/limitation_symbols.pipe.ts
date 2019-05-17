import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'limitSymbols'  })

/**
 * eg: {{room.description | limitSymbols:39}}
 */
export class LimitSymbols implements PipeTransform {

  /**
   * ограничение выводимых символов с добавлением троеточия
   */
  transform(inputString, limit) {

    if (inputString.length > limit) {
      return inputString.slice(0, limit) + ' ...';
    }
    return inputString;

  }
}
