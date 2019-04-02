function Column(id, name) {
    var self = this;
    this.id = id;
    this.name = name || 'No name given';
    this.element = generateTemplate('column-template', { name: this.name, id: this.id });
    this.element.className = 'col col-4';
  
    this.element.querySelector('.column').addEventListener('click', function (event) {
      if (event.target.classList.contains('btn-delete')) {
        self.removeColumn();
      }
      if (event.target.classList.contains('add-card')) {
        var cardName = prompt('Enter the name of the card');
        event.preventDefault();
  
        var data = new FormData();
        data.append('name', cardName);
        data.append('bootcamp_kanban_column_id', self.id);
  
        fetch(baseUrl + '/card', {
             method: 'POST', headers: myHeaders, body: data
            })
          .then(function(resp) {
            return resp.json();
          })
          .then(function(resp) {
            var card = new Card(resp.id, cardName);
            self.addCard(card);
          })
      }
  
      if (event.target.classList.contains('column-title')) {
        var newColumnTitle = prompt('Enter new column title') || 'No name given';
        event.preventDefault();
  
        var data = new FormData();
        data.append('name', newColumnTitle);
  
        fetch(baseUrl + '/column/' + self.id, { method: 'PUT', headers: myHeaders, body: data})
          .then(function(resp) {
            return resp.json();
          })
          .then(function(resp) {
            self.name = newColumnTitle;
            self.element.querySelector('.column-title').innerHTML = self.name;
          })
      }
    });
  };
  
  Column.prototype = {
      addCard: function(card) {
        this.element.querySelector('ul').appendChild(card.element);
      },
      removeColumn: function() {
        var self = this;
        fetch(baseUrl + '/column/' + self.id, { method: 'DELETE', headers: myHeaders})
          .then(function(resp) {
            return resp.json();
          })
          .then(function(resp) {
            self.element.parentNode.removeChild(self.element);
          })
      }
  };