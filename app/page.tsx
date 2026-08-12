export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "16px",
        }}
      >
        Entre Linhas
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "600px",
          lineHeight: 1.6,
        }}
      >
        Entre o que é dito e o que é sentido.
      </p>
    </main>
  );
}
