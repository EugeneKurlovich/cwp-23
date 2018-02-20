const mendeleev = require('mendeleev');

module.exports = (element) => {
      const elementDescription = mendeleev(element);
      if (elementDescription) {
          return `${elementDescription.number}. ${elementDescription.name} / ${elementDescription.weight}`;
      }
      else throw new Error('Element does not exits');
};