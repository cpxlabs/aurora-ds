import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("usa type button por padrão", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByRole("button", { name: "Salvar" })).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("repassa props nativas do botão", () => {
    render(
      <Button disabled variant="ghost">
        Cancelar
      </Button>
    );

    expect(screen.getByRole("button", { name: "Cancelar" })).toBeDisabled();
  });
});
