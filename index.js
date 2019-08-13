/**
 * Array
*/


/**
 * Agrupa os item do Array por uma propriedade do objeto, caso a propriedade nao exista 'e classificado como undefined
 * @param prop: string propriedade a ser filtrada
 * return object
 */
//
Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}


/**
 * Object
 */

/**
 * Remove propriedade com valor null ou undefined - É realizado a remoção do objeto original
 * return void
 */
Object.prototype.removePropsEmpty = function() {
    let obj = this;
  for (let propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
return obj;
}

/**
 * Verifica de object está vazio
 * return boolean
 */
Object.prototype.IsEmpty = function(){
    let obj = this
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}
