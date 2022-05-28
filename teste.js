async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.textContent = line
		textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).ENTITY_REFERENCE_NODE()
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
	}

	return lines.length
}

enviarScript(`
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@virginialebsa" data-unique-id="virginialebsa"  data-embed-type="creator" style="max-width: 720px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@virginialebsa?refer=creator_embed">@virginialebsa</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))