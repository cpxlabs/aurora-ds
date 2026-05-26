import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Avatar } from "../components/avatar/Avatar";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../components/dialog/Dialog";
import { Progress } from "../components/progress/Progress";
import { Spinner } from "../components/spinner/Spinner";
import { AuroraI18nProvider, auroraI18nMessages } from "./AuroraI18n";

describe("AuroraI18nProvider", () => {
  it("usa pt_br como locale padrão para textos internos", () => {
    render(
      <>
        <Avatar />
        <Progress value={40} />
        <Spinner />
      </>
    );

    expect(screen.getByRole("img", { name: auroraI18nMessages.pt_br.avatarFallbackLabel })).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-label",
      auroraI18nMessages.pt_br.progressLabel
    );
    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      auroraI18nMessages.pt_br.spinnerLabel
    );
  });

  it("traduz os textos internos para espanhol", () => {
    render(
      <AuroraI18nProvider locale="es">
        <Dialog open>
          <DialogContent>
            <DialogTitle>Confirmación</DialogTitle>
            <DialogDescription>¿Desea continuar?</DialogDescription>
          </DialogContent>
        </Dialog>
      </AuroraI18nProvider>
    );

    expect(
      screen.getByRole("button", { name: auroraI18nMessages.es.dialogCloseLabel })
    ).toBeInTheDocument();
  });

  it("traduz os textos internos para inglês", () => {
    render(
      <AuroraI18nProvider locale="eng">
        <Spinner />
      </AuroraI18nProvider>
    );

    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      auroraI18nMessages.eng.spinnerLabel
    );
  });

  it("permite sobrescrever mensagens individualmente", () => {
    render(
      <AuroraI18nProvider locale="eng" messages={{ progressLabel: "Upload progress" }}>
        <Progress value={70} />
      </AuroraI18nProvider>
    );

    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-label", "Upload progress");
  });
});
