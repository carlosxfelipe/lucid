import { h } from "@lucid/index.ts";
import Layout from "@layout/Layout.tsx";
import Counter from "@demo/Counter.tsx";

export default function HomePage() {
  return (
    <Layout>
      <h1 class="text-4xl font-bold mb-4">Bem-vindo à Página Inicial</h1>
      <p class="mb-6">
        Esta é a página principal do nosso aplicativo. Explore os recursos e
        aproveite sua visita!
      </p>
      <Counter />
    </Layout>
  );
}
