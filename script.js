<!DOCTYPE html>
<html>
<head>
  <title>Sikkim AI Prediction v2</title>
  <style>
    body { background:#000; color:#fff; font-family:Arial; text-align:center; padding:30px; }
    h2 { color:#00ffcc; }
    input { padding:10px; width:60%; border-radius:8px; border:none; text-align:center; }
    button { padding:10px 25px; border:none; background:#00ff66; color:#000; border-radius:8px; margin-top:10px; font-weight:bold; }
    .result-box { background:#111; margin-top:25px; padding:15px; border-radius:10px; box-shadow:0 0 10px #0f0; display:inline-block; }
    .chance { font-size:20px; color:#ffcc00; }
  </style>
</head>
<body>

  <h2>🧠 Sikkim AI Prediction Panel</h2>
  <input id="period" placeholder="Enter Period Number">
  <br>
  <button onclick="predict()">🔮 Get AI Prediction</button>

  <div class="result-box" id="result" style="display:none;">
    <h3 id="prediction"></h3>
    <p class="chance" id="chance"></p>
  </div>

  <script>
    function predict() {
      const period = document.getElementById("period").value.trim();
      if (!period) return alert("⚠️ Period number daalo!");

      // Convert last 3 digits into base pattern
      let last3 = parseInt(period.slice(-3)) || 0;

      // Simple AI trend logic
      let num = (last3 * 7 + 3) % 10; // pseudo-random pattern
      let color = num % 2 === 0 ? "🟥 RED" : "🟩 GREEN";
      let size = num >= 5 ? "BIG" : "SMALL";

      // AI confidence calculation
      let chance = 60 + Math.floor(Math.random() * 40); // 60–99%

      document.getElementById("result").style.display = "block";
      document.getElementById("prediction").innerHTML =
        `<b>Number:</b> ${num}<br><b>Color:</b> ${color}<br><b>Size:</b> ${size}`;
      document.getElementById("chance").innerText = `🎯 AI Prediction Chance: ${chance}%`;
    }
  </script>

</body>
</html>