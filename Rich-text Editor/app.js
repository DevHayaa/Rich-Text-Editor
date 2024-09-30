function execCmd(command, value = null) {
    document.execCommand(command, false, value);
  }
  
  document.getElementById('editor').addEventListener('input', () => {
    console.log('Content updated:', document.getElementById('editor').innerHTML);
  });
  