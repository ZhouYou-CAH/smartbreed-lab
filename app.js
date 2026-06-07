const traitConfigs = {
  nba: {
    label: "产健仔数",
    code: "NBA",
    unit: "头",
    years: [2021, 2022, 2023, 2024, 2025, 2026],
    trends: {
      PBLUP: [0.06, 0.10, 0.15, 0.20, 0.26, 0.32],
      GBLUP: [0.07, 0.13, 0.20, 0.27, 0.35, 0.42],
      ssGBLUP: [0.08, 0.15, 0.23, 0.31, 0.39, 0.45]
    },
    accuracy: { PBLUP: 0.63, GBLUP: 0.69, ssGBLUP: 0.72 },
    ebv: [1.42, 1.31, 1.26, 1.18, 1.13]
  },
  adg: {
    label: "日增重",
    code: "ADG",
    unit: "g/d",
    years: [2021, 2022, 2023, 2024, 2025, 2026],
    trends: {
      PBLUP: [4, 7, 10, 14, 18, 21],
      GBLUP: [5, 9, 14, 19, 24, 29],
      ssGBLUP: [6, 11, 17, 23, 29, 35]
    },
    accuracy: { PBLUP: 0.61, GBLUP: 0.68, ssGBLUP: 0.71 },
    ebv: [48.2, 44.7, 42.5, 39.8, 37.1]
  },
  fcr: {
    label: "料肉比",
    code: "FCR",
    unit: "",
    years: [2021, 2022, 2023, 2024, 2025, 2026],
    trends: {
      PBLUP: [-0.012, -0.021, -0.032, -0.043, -0.052, -0.061],
      GBLUP: [-0.015, -0.028, -0.041, -0.055, -0.068, -0.081],
      ssGBLUP: [-0.017, -0.031, -0.047, -0.063, -0.079, -0.094]
    },
    accuracy: { PBLUP: 0.58, GBLUP: 0.66, ssGBLUP: 0.70 },
    ebv: [-0.18, -0.16, -0.15, -0.13, -0.12]
  },
  bf: {
    label: "背膘厚",
    code: "BF",
    unit: "mm",
    years: [2021, 2022, 2023, 2024, 2025, 2026],
    trends: {
      PBLUP: [-0.08, -0.12, -0.17, -0.21, -0.26, -0.30],
      GBLUP: [-0.09, -0.15, -0.21, -0.28, -0.34, -0.40],
      ssGBLUP: [-0.10, -0.17, -0.24, -0.31, -0.39, -0.46]
    },
    accuracy: { PBLUP: 0.64, GBLUP: 0.71, ssGBLUP: 0.74 },
    ebv: [-1.26, -1.18, -1.11, -1.04, -0.98]
  }
};

const animalIds = ["YC-260118", "YC-260207", "YC-260083", "YC-260154", "YC-260226"];
const animalSex = ["公", "公", "母", "公", "母"];
const inbreeding = [1.8, 2.1, 1.5, 2.6, 1.9];

const selectionAnimals = [
  { id: "YC-260118", nba: 1.42, growth: 0.72, fcr: 0.91, bf: 0.58, inbreeding: 1.8 },
  { id: "YC-260207", nba: 1.15, growth: 0.94, fcr: 0.68, bf: 0.63, inbreeding: 2.1 },
  { id: "YC-260083", nba: 1.28, growth: 0.58, fcr: 0.84, bf: 0.89, inbreeding: 1.5 },
  { id: "YC-260154", nba: 0.92, growth: 1.08, fcr: 0.75, bf: 0.54, inbreeding: 2.6 },
  { id: "YC-260226", nba: 1.08, growth: 0.64, fcr: 0.79, bf: 0.96, inbreeding: 1.9 }
];

const boars = [
  {
    id: "YC-B018",
    label: "繁殖优势",
    index: 118.6,
    mates: [
      { id: "YC-S2041", kinship: 1.4, gain: 7.8, nba: 0.73, risk: "低" },
      { id: "YC-S2188", kinship: 1.7, gain: 7.2, nba: 0.69, risk: "低" },
      { id: "YC-S1962", kinship: 2.1, gain: 6.8, nba: 0.66, risk: "低" }
    ],
    explain: "优先推荐 YC-S2041：预期近交仅 1.4%，后代综合指数增益最高，并在产健仔数方向保持明显优势；三组组合均未触发同位点遗传缺陷回避规则。"
  },
  {
    id: "YC-B027",
    label: "生长优势",
    index: 116.9,
    mates: [
      { id: "YC-S2217", kinship: 1.2, gain: 8.1, nba: 0.54, risk: "低" },
      { id: "YC-S1904", kinship: 1.8, gain: 7.6, nba: 0.51, risk: "低" },
      { id: "YC-S2096", kinship: 2.4, gain: 7.1, nba: 0.48, risk: "低" }
    ],
    explain: "YC-B027 更适合提升生长效率。推荐组合在近交约束内具有较高后代综合指数，同时通过母系繁殖 EBV 平衡其繁殖力相对短板。"
  },
  {
    id: "YC-B041",
    label: "均衡型",
    index: 115.8,
    mates: [
      { id: "YC-S2112", kinship: 1.1, gain: 7.4, nba: 0.65, risk: "低" },
      { id: "YC-S2260", kinship: 1.6, gain: 7.0, nba: 0.63, risk: "低" },
      { id: "YC-S1835", kinship: 2.0, gain: 6.7, nba: 0.61, risk: "低" }
    ],
    explain: "YC-B041 的性状结构最均衡，适合在控制群体近交的前提下稳定推进多性状改良。YC-S2112 的亲缘风险最低，适合作为首选组合。"
  }
];

let currentBoar = 0;

function currentModel() {
  return document.querySelector('input[name="model"]:checked').value;
}

function currentTrait() {
  return document.getElementById("traitSelect").value;
}

function formatValue(value, code) {
  const digits = code === "ADG" ? 1 : code === "NBA" ? 2 : 3;
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(digits)}`;
}

function drawTrend() {
  const canvas = document.getElementById("trendChart");
  const rect = canvas.getBoundingClientRect();
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(rect.width * scale, 300);
  canvas.height = Math.max(rect.height * scale, 220);

  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  const width = canvas.width / scale;
  const height = canvas.height / scale;
  const padding = { top: 22, right: 26, bottom: 38, left: 48 };

  const trait = traitConfigs[currentTrait()];
  const model = currentModel();
  const values = trait.trends[model];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 0.01);

  ctx.clearRect(0, 0, width, height);
  ctx.font = '10px "Microsoft YaHei", Arial';
  ctx.lineWidth = 1;

  for (let i = 0; i < 5; i += 1) {
    const y = padding.top + ((height - padding.top - padding.bottom) * i) / 4;
    ctx.strokeStyle = "#e6edef";
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();

    const labelValue = max - (range * i) / 4;
    ctx.fillStyle = "#8a989f";
    ctx.textAlign = "right";
    ctx.fillText(labelValue.toFixed(Math.abs(max) < 1 ? 2 : 0), padding.left - 10, y + 3);
  }

  const points = values.map((value, index) => {
    const x = padding.left + ((width - padding.left - padding.right) * index) / (values.length - 1);
    const y = padding.top + ((max - value) / range) * (height - padding.top - padding.bottom);
    return { x, y, value };
  });

  const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
  gradient.addColorStop(0, "rgba(24, 167, 157, 0.26)");
  gradient.addColorStop(1, "rgba(24, 167, 157, 0.01)");
  ctx.beginPath();
  ctx.moveTo(points[0].x, height - padding.bottom);
  points.forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.lineTo(points[points.length - 1].x, height - padding.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.strokeStyle = "#18a79d";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#0f8f88";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = "#819097";
    ctx.textAlign = "center";
    ctx.fillText(trait.years[index], point.x, height - 14);
  });

  const gain = values[values.length - 1] - values[0];
  const slope = gain / (values.length - 1);
  document.getElementById("trendTitle").textContent = `${trait.label} ${model === "PBLUP" ? "EBV" : "GEBV"} 年度趋势`;
  document.getElementById("trendGain").textContent = `${gain > 0 ? "+" : ""}${gain.toFixed(Math.abs(gain) < 1 ? 2 : 1)} ${trait.unit} / 5 年`;
  document.getElementById("trendSlope").textContent = `${slope > 0 ? "+" : ""}${slope.toFixed(Math.abs(slope) < 1 ? 3 : 1)}`;
}

function renderRanking() {
  const trait = traitConfigs[currentTrait()];
  const model = currentModel();
  const modifier = { PBLUP: 0.88, GBLUP: 0.96, ssGBLUP: 1 }[model];
  const tbody = document.getElementById("rankingBody");
  const accuracy = trait.accuracy[model];

  tbody.innerHTML = animalIds.map((id, index) => {
    const ebv = trait.ebv[index] * modifier;
    const acc = Math.max(accuracy - index * 0.018, 0.5);
    return `
      <tr>
        <td><span class="rank-badge">${index + 1}</span></td>
        <td><strong>${id}</strong></td>
        <td>${animalSex[index]}</td>
        <td><strong>${formatValue(ebv, trait.code)}</strong></td>
        <td>${acc.toFixed(2)}</td>
        <td>${inbreeding[index].toFixed(1)}%</td>
        <td><span class="data-status">已质控</span></td>
      </tr>
    `;
  }).join("");

  document.getElementById("ebvHeader").textContent = `${trait.code} ${model === "PBLUP" ? "EBV" : "GEBV"}`;
  document.getElementById("avgAccuracy").textContent = accuracy.toFixed(2);
  document.getElementById("accuracyLift").textContent = `${accuracy - trait.accuracy.PBLUP >= 0 ? "+" : ""}${(accuracy - trait.accuracy.PBLUP).toFixed(2)}`;

  const notes = {
    PBLUP: "PBLUP 基于系谱关系矩阵 A，适合作为历史评估基线与未分型群体的常规评估。",
    GBLUP: "GBLUP 使用基因组关系矩阵 G，提高年轻候选个体的早期选择准确度。",
    ssGBLUP: "ssGBLUP 将基因分型与未分型个体纳入同一 H 矩阵，适用于核心群持续遗传评估。"
  };
  document.getElementById("modelNote").textContent = `当前：${notes[model]}`;
}

function updateEvaluation() {
  drawTrend();
  renderRanking();
}

function runEvaluation() {
  const button = document.getElementById("runModel");
  const original = button.innerHTML;
  button.classList.add("running");
  button.innerHTML = "<span>正在构建方程并求解…</span><small>模拟任务运行</small>";

  window.setTimeout(() => {
    updateEvaluation();
    document.getElementById("batchTime").textContent = new Date().toLocaleString("zh-CN", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).replaceAll("/", "-");
    button.innerHTML = original;
    button.classList.remove("running");
    showToast(`${currentModel()} 评估完成，结果已刷新`);
  }, 720);
}

function getWeights() {
  return Array.from(document.querySelectorAll("[data-weight]")).reduce((acc, input) => {
    acc[input.dataset.weight] = Number(input.value);
    return acc;
  }, {});
}

function updateSelectionIndex() {
  const weights = getWeights();
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
  const summary = document.querySelector(".weight-summary");
  document.getElementById("weightTotal").textContent = `${total}%`;
  document.getElementById("weightHint").textContent = total === 100
    ? "权重已归一化，可直接比较候选个体。"
    : "演示将按当前权重合计自动归一化。";
  summary.classList.toggle("invalid", total !== 100);

  document.querySelectorAll("[data-weight]").forEach((input) => {
    input.closest("label").querySelector("output").textContent = `${input.value}%`;
  });

  const divisor = total || 1;
  const ranked = selectionAnimals.map((animal) => {
    const score = (
      animal.nba * weights.nba +
      animal.growth * weights.growth +
      animal.fcr * weights.fcr +
      animal.bf * weights.bf
    ) / divisor;
    return { ...animal, score };
  }).sort((a, b) => b.score - a.score);

  const minScore = Math.min(...ranked.map((animal) => animal.score));
  const maxScore = Math.max(...ranked.map((animal) => animal.score));
  document.getElementById("indexRanking").innerHTML = ranked.map((animal, index) => {
    const width = 55 + ((animal.score - minScore) / Math.max(maxScore - minScore, 0.01)) * 45;
    return `
      <div class="index-row">
        <span>${index + 1}</span>
        <strong>${animal.id}</strong>
        <div class="index-bar"><i style="width:${width}%"></i></div>
        <span>${(animal.score * 100).toFixed(1)}</span>
      </div>
    `;
  }).join("");

  const dominant = Object.entries(weights).sort((a, b) => b[1] - a[1])[0][0];
  const traitNames = { nba: "繁殖力", growth: "生长速度", fcr: "饲料效率", bf: "胴体品质" };
  document.getElementById("indexInsight").textContent =
    `当前育种目标偏重${traitNames[dominant]}，${ranked[0].id} 的综合指数最高；其近交系数为 ${ranked[0].inbreeding.toFixed(1)}%，建议结合家系贡献上限确定最终选留数量。`;
}

function resetWeights() {
  const defaults = { nba: 40, growth: 25, fcr: 25, bf: 10 };
  document.querySelectorAll("[data-weight]").forEach((input) => {
    input.value = defaults[input.dataset.weight];
  });
  updateSelectionIndex();
  showToast("已恢复推荐育种目标权重");
}

function renderBoars() {
  const selector = document.getElementById("boarSelector");
  selector.innerHTML = boars.map((boar, index) => `
    <button class="boar-card ${index === currentBoar ? "active" : ""}" data-boar="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div><strong>${boar.id}</strong><small>${boar.label}</small></div>
      <b>${boar.index.toFixed(1)}</b>
    </button>
  `).join("");

  selector.querySelectorAll("[data-boar]").forEach((button) => {
    button.addEventListener("click", () => {
      currentBoar = Number(button.dataset.boar);
      renderBoars();
      renderMating();
    });
  });
}

function renderMating() {
  const boar = boars[currentBoar];
  document.getElementById("matingTitle").textContent = `${boar.id} 的母猪匹配建议`;
  document.getElementById("matingResults").innerHTML = boar.mates.map((mate, index) => `
    <div class="mating-row">
      <span class="mating-rank">${index + 1}</span>
      <div><small>候选母猪</small><strong>${mate.id}</strong></div>
      <div><small>预期近交</small><strong>${mate.kinship.toFixed(1)}%</strong></div>
      <div><small>指数增益</small><strong>+${mate.gain.toFixed(1)}</strong></div>
      <div><small>风险</small><strong class="risk-low">${mate.risk}</strong></div>
    </div>
  `).join("");
  document.getElementById("matingExplain").textContent = boar.explain;
}

function exportSummary() {
  const trait = traitConfigs[currentTrait()];
  const model = currentModel();
  const content = [
    "SmartBreed Lab 遗传评估摘要（演示数据）",
    `模型：${model}`,
    `性状：${trait.label} (${trait.code})`,
    `平均准确度：${trait.accuracy[model].toFixed(2)}`,
    "说明：本文件由求职案例原型生成，不包含企业生产数据。"
  ].join("\r\n");
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `遗传评估摘要-${trait.code}-${model}.txt`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("评估摘要已生成");
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("traitSelect").addEventListener("change", updateEvaluation);
document.querySelectorAll('input[name="model"]').forEach((input) => {
  input.addEventListener("change", updateEvaluation);
});
document.getElementById("runModel").addEventListener("click", runEvaluation);
document.getElementById("exportButton").addEventListener("click", exportSummary);
document.getElementById("resetWeights").addEventListener("click", resetWeights);
document.querySelectorAll("[data-weight]").forEach((input) => {
  input.addEventListener("input", updateSelectionIndex);
});

window.addEventListener("resize", () => {
  window.clearTimeout(window.chartResizeTimer);
  window.chartResizeTimer = window.setTimeout(drawTrend, 120);
});

updateEvaluation();
updateSelectionIndex();
renderBoars();
renderMating();
