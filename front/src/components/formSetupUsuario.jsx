import { useState } from "react";

const perguntas = [
	{
		titulo: "O que você gostaria de estudar?",
		opcoes: ["Tecnologia", "Idiomas", "Negócios", "Desenvolvimento pessoal", "Outro"],
	},
	{
		titulo: "Como você prefere aprender?",
		opcoes: ["Vídeos", "Textos", "Exercícios práticos", "Um pouco de cada"],
	},
	{
		titulo: "Quanto tempo você pode estudar por dia?",
		opcoes: ["Até 15 minutos", "De 15 a 30 minutos", "De 30 a 60 minutos", "Mais de 1 hora"],
	},
];

export default function FormSetupUsuario() {
	const [perguntaAtual, setPerguntaAtual] = useState(0);
	const [respostas, setRespostas] = useState([]);
	const concluido = perguntaAtual === perguntas.length;

	function responder(opcao) {
		setRespostas((atuais) => [...atuais, opcao]);
		setPerguntaAtual((atual) => atual + 1);
	}

	const cardStyle = {
		maxWidth: 560,
		margin: "48px auto",
		padding: 32,
		color: "#1f2937",
		fontFamily: "Arial, sans-serif",
		background: "#fff",
		borderRadius: 16,
		boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
	};

	if (concluido) {
		return (
			<main style={cardStyle}>
				<h1>Preferências concluídas!</h1>
				<p>Suas respostas foram registradas para personalizar seus estudos.</p>
			</main>
		);
	}

	const pergunta = perguntas[perguntaAtual];

	return (
		<main style={cardStyle}>
			<p style={{ color: "#6b7280" }}>
				Pergunta {perguntaAtual + 1} de {perguntas.length}
			</p>
			<div
				role="progressbar"
				aria-label="Progresso das perguntas"
				aria-valuemin={0}
				aria-valuemax={perguntas.length}
				aria-valuenow={perguntaAtual + 1}
				style={{ height: 6, background: "#e5e7eb", borderRadius: 6 }}
			>
				<div
					style={{
						width: `${((perguntaAtual + 1) / perguntas.length) * 100}%`,
						height: "100%",
						background: "#4f46e5",
						borderRadius: 6,
						transition: "width 200ms ease",
					}}
				/>
			</div>
			<h1 style={{ fontSize: 26 }}>{pergunta.titulo}</h1>
			<div>
				{pergunta.opcoes.map((opcao) => (
					<button
						key={opcao}
						type="button"
						onClick={() => responder(opcao)}
						style={{
							display: "block",
							width: "100%",
							marginTop: 12,
							padding: "14px 16px",
							textAlign: "left",
							fontSize: 16,
							color: "#1f2937",
							background: "#fff",
							border: "1px solid #d1d5db",
							borderRadius: 10,
							cursor: "pointer",
						}}
					>
						{opcao}
					</button>
				))}
			</div>
		</main>
	);
}