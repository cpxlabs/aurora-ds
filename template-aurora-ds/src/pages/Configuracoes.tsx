import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
  Switch,
  Checkbox,
  Separator,
} from "@cpxlabs/aurora-ds";

export function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [modoCompacto, setModoCompacto] = useState(false);
  const [resumoAuto, setResumoAuto] = useState(true);

  return (
    <Card className="config-card">
      <CardHeader>
        <CardTitle>Configurações</CardTitle>
        <CardDescription>Preferências compartilhadas do app base.</CardDescription>
      </CardHeader>
      <CardContent className="config-content">
        <div className="control-row">
          <Switch
            id="notificacoes"
            checked={notificacoes}
            onCheckedChange={setNotificacoes}
          />
          <Label htmlFor="notificacoes">Notificações ativas</Label>
        </div>

        <Separator className="card-separator" />

        <div className="control-row">
          <Switch
            id="modo-compacto"
            checked={modoCompacto}
            onCheckedChange={setModoCompacto}
          />
          <Label htmlFor="modo-compacto">Modo compacto</Label>
        </div>

        <div className="control-row">
          <Checkbox
            id="resumo-auto"
            checked={resumoAuto}
            onCheckedChange={(checked) => setResumoAuto(Boolean(checked))}
          />
          <Label htmlFor="resumo-auto">Resumo automático</Label>
        </div>
      </CardContent>
    </Card>
  );
}
