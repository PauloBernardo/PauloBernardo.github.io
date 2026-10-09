const $ = (id) => document.getElementById(id);
const tags = (arr) => arr.map((t) => `<span class="tag">${t}</span>`).join("");
const L = DATA.links;

$("nome").textContent = DATA.nome;
if (DATA.foto) { $("foto").src = DATA.foto; $("foto").hidden = false; }
$("cargo").textContent = DATA.cargo;
$("resumo").textContent = DATA.resumo;

const ctaHtml = [
  `<a class="btn" href="mailto:${L.email}">E-mail</a>`,
  `<a class="btn" href="${L.linkedin}" target="_blank">LinkedIn</a>`,
  `<a class="btn" href="${L.github}" target="_blank">GitHub</a>`,
  L.cv && `<a class="btn" href="${L.cv}" target="_blank">Currículo</a>`
].filter(Boolean).join("");
$("cta").innerHTML = $("cta2").innerHTML = ctaHtml;

$("formacao").innerHTML = DATA.formacao
  .map((f) => `<li><b>${f.titulo}</b><small>${f.inst} · ${f.periodo}</small></li>`).join("");
$("skills").innerHTML = Object.entries(DATA.skills)
  .map(([g, s]) => `<div class="skillgrp"><b>${g}</b>${tags(s)}</div>`).join("");

$("idiomas").innerHTML = DATA.idiomas
  .map((i) => `<li><b>${i.idioma}</b> — ${i.nivel}${i.inst ? `<small>${i.inst} · ${i.ano}</small>` : ""}</li>`).join("");

const E = DATA.empresa;
$("casos").innerHTML = DATA.experiencia.map((x) => `
  <article class="job">
    <div class="job-head"><div><h5>${x.cargo}</h5><span class="accent">${x.org}</span></div>
      <span class="meta">${x.periodo}</span></div>
    <p>${x.resumo}</p>
    <ul>${x.destaques.map((d) => `<li>${d}</li>`).join("")}</ul>
    <div>${tags(x.stack)}</div>
  </article>`).join("");

const P = DATA.pesquisa;
$("pesq-resumo").textContent = P.resumo;
$("pesq-orient").textContent = "Orientador: " + P.orientador;
$("pesq-areas").innerHTML = tags(P.areas);
$("publicacoes").innerHTML = P.publicacoes.map((p) => `
  <article class="card pub">
    <span class="meta">${p.veiculo} · ${p.ano}</span>
    <h5>${p.titulo}</h5>
    <span class="meta">${p.autores}</span>
    <p>${p.resumo}</p>
    <div>${tags(p.tags)}</div>
    <a class="btn" href="${p.link}" target="_blank">Ler artigo ↗</a>
  </article>`).join("");

function renderProjetos(filtro) {
  const lista = DATA.projetos.filter((p) => !filtro || p.instituicao === filtro);
  $("lista-projetos").innerHTML = lista.map((p) => `
    <article class="card">
      <span class="badge">${p.instituicao}</span>
      <span class="meta">${p.periodo} · ${p.papel}</span>
      <h5>${p.titulo}</h5><span class="meta">${p.codigo || ""}</span><p>${p.descricao}</p>
      <div>${tags(p.stack)}</div>
    </article>`).join("");
}
const insts = [...new Set(DATA.projetos.map((p) => p.instituicao))];
if (insts.length < 2) $("filtros").hidden = true;
$("filtros").innerHTML = ["Todos", ...insts]
  .map((i, n) => `<button class="${n ? "" : "on"}" data-f="${n ? i : ""}">${i}</button>`).join("");
$("filtros").onclick = (e) => {
  if (!e.target.matches("button")) return;
  [...$("filtros").children].forEach((b) => b.classList.toggle("on", b === e.target));
  renderProjetos(e.target.dataset.f);
};
renderProjetos();

$("rodape").innerHTML = `© ${new Date().getFullYear()} ${E.razao} · CNPJ ${E.cnpj}`;
