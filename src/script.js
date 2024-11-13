// Seleciona elementos do DOM
const addItemInput = document.getElementById('add-item');
const addItemButton = document.getElementById('add-item-button');
const itemList = document.getElementById('item-list');
const removidoAlert = document.getElementById('removido');

// Esconde o alerta de item removido inicialmente
removidoAlert.style.display = 'none';

// Função para adicionar um novo item
function addNewItem() {
  const itemText = addItemInput.value.trim();
  
  if (itemText !== '') {
    // Verifica se há algum checkbox marcado
    const checkboxes = itemList.querySelectorAll('input[type="checkbox"]');
    const checkedItems = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    // Se não houver itens selecionados, exibe uma mensagem
    if (checkedItems.length === 0) {
      alert("Por favor, selecione um item antes de adicionar.");
      return;
    }

    // Cria os elementos do novo item
    const li = document.createElement('li');
    li.classList.add('itens');

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = updateAddButton;

    const p = document.createElement('p');
    p.textContent = itemText;

    label.appendChild(checkbox);
    label.appendChild(p);

    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('delete');
    deleteIcon.src = 'src/icons/icon-delete.png';
    deleteIcon.alt = 'Deletar item';
    deleteIcon.onclick = function () {
      removeItem(li);
    };

    li.appendChild(label);
    li.appendChild(deleteIcon);

    itemList.appendChild(li);
    addItemInput.value = ''; // Limpa o campo de entrada

    // Alerta de sucesso após adicionar o item
    alert("O item foi adicionado com sucesso.");
  }
}

// Função para remover um item da lista e exibir o alerta
function removeItem(item) {
  itemList.removeChild(item);

  // Mostra o alerta de item removido
  removidoAlert.style.display = 'flex';
  
  // Oculta o alerta após 3 segundos
  setTimeout(() => {
    removidoAlert.style.display = 'none';
  }, 3000);
}

// Função vazia para manter a estrutura existente (caso você queira adicionar alguma lógica para o checkbox)
function updateAddButton() {
  // Você pode adicionar lógica para atualizar o botão ou manipular o estado dos checkboxes aqui
}

// Evento para adicionar item ao pressionar Enter no campo de texto
addItemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addNewItem();
  }
});

// Evento para adicionar item ao clicar no botão
addItemButton.onclick = addNewItem;