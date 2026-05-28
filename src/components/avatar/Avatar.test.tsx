import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("exibe as iniciais quando não há imagem", () => {
    render(<Avatar initials="AB" />);

    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("exibe apenas os 2 primeiros caracteres das iniciais em maiúsculas", () => {
    render(<Avatar initials="abc" />);

    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("ignora espaços ao resolver o rótulo acessível e as iniciais visíveis", () => {
    render(<Avatar initials=" ab " />);

    expect(screen.getByRole("img", { name: "ab" })).toBeInTheDocument();
    expect(screen.getByText("AB")).toHaveAttribute("aria-hidden", "true");
  });

  it("exibe '?' quando não há imagem nem iniciais", () => {
    render(<Avatar />);

    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("renderiza a imagem quando src é fornecido", () => {
    render(<Avatar src="https://example.com/foto.jpg" alt="Foto de João" />);

    expect(screen.getByRole("img", { name: "Foto de João" })).toBeInTheDocument();
  });

  it("usa o alt como aria-label quando src está presente", () => {
    render(<Avatar src="https://example.com/foto.jpg" alt="Foto de Ana" />);

    const container = screen.getByRole("img", { name: "Foto de Ana" });
    expect(container).toHaveAttribute("aria-label", "Foto de Ana");
  });

  it("usa o rótulo padrão quando o alt é vazio", () => {
    render(<Avatar src="https://example.com/foto.jpg" alt="   " />);

    expect(screen.getByRole("img", { name: "Avatar" })).toBeInTheDocument();
  });

  it("marca a imagem interna como decorativa", () => {
    render(<Avatar src="https://example.com/foto.jpg" alt="Foto de João" />);

    expect(screen.getByRole("img", { name: "Foto de João" }).firstElementChild).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("repassa className extra", () => {
    render(<Avatar initials="CD" className="minha-classe" />);

    const container = screen.getByRole("img");
    expect(container).toHaveClass("minha-classe");
  });
});
