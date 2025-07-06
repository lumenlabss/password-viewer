chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const inputs = document.querySelectorAll('input[type="password"]');
      if (inputs.length === 0) {
        alert("Aucun champ mot de passe trouvé !");
        return;
      }
      inputs.forEach((input) => {
        input.type = "text";
      });
      alert(`${inputs.length} champ(s) de mot de passe révélé(s)`);
    },
  });
});
