const fontSizeMap = {
      small: '14px',
      medium: '18px',
      large: '24px'
    };
function applySettings() {
      const bgColor = localStorage.getItem('bgColor') || '#ffffff'; 
      const fontColor = localStorage.getItem('fontColor') || '#000000'; 
      const fontSizeKey = localStorage.getItem('fontSize') || 'medium'; 

      document.body.style.backgroundColor = bgColor;
      document.body.style.color = fontColor;
      document.body.style.fontSize = fontSizeMap[fontSizeKey];

      document.getElementById('bgColor').value = bgColor;
      document.getElementById('fontColor').value = fontColor;
      document.getElementById('fontSize').value = fontSizeKey;
}

function saveSettings() {
      const bgColor = document.getElementById('bgColor').value;
      const fontColor = document.getElementById('fontColor').value;
      const fontSize = document.getElementById('fontSize').value;

      localStorage.setItem('bgColor', bgColor);
      localStorage.setItem('fontColor', fontColor);
      localStorage.setItem('fontSize', fontSize);

      applySettings();
      alert('บันทึกการตั้งค่าเรียบร้อยแล้ว');
}

function resetSettings() {
      localStorage.removeItem('bgColor');
      localStorage.removeItem('fontColor');
      localStorage.removeItem('fontSize');

      applySettings();
      alert('รีเซตการตั้งค่าแล้ว');
}


window.onload = applySettings;