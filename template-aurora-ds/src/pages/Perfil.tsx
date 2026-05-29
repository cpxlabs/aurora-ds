import { type FormEvent } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  Textarea,
} from "@cpxlabs/aurora-ds";
import { type UserProfile } from "../context/authContextInstance";
import { useAuth } from "../context/useAuth";
import { useState } from "react";

export function Perfil() {
  const { profile, autenticado, atualizar } = useAuth();

  const [form, setForm] = useState<UserProfile>(profile);
  const [mensagem, setMensagem] = useState("");

  const handleSalvar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    atualizar(form);
    setMensagem("Perfil atualizado com sucesso.");
  };

  if (!autenticado) {
    return (
      <Card className="message-card">
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Faça login para acessar e editar seu perfil.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="profile-card">
      <CardHeader>
        <CardTitle>Perfil compartilhado</CardTitle>
        <CardDescription>Dados de perfil prontos para reaproveitar em qualquer novo app.</CardDescription>
      </CardHeader>
      <CardContent>
        {mensagem ? <p className="form-sucesso">{mensagem}</p> : null}
        <form className="form-stack" onSubmit={handleSalvar}>
          <Label htmlFor="perfil-nome">Nome</Label>
          <Input
            id="perfil-nome"
            value={form.nome}
            onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
          />

          <Label htmlFor="perfil-email">E-mail</Label>
          <Input
            id="perfil-email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />

          <Label htmlFor="perfil-cargo">Cargo</Label>
          <Select
            id="perfil-cargo"
            value={form.cargo}
            onChange={(event) => setForm((prev) => ({ ...prev, cargo: event.target.value }))}
          >
            <option value="produto">Produto</option>
            <option value="design">Design</option>
            <option value="engenharia">Engenharia</option>
          </Select>

          <Label htmlFor="perfil-bio">Bio</Label>
          <Textarea
            id="perfil-bio"
            rows={4}
            placeholder="Descreva a pessoa usuária do template..."
            value={form.bio}
            onChange={(event) => setForm((prev) => ({ ...prev, bio: event.target.value }))}
          />

          <CardFooter className="form-footer">
            <Button type="submit">Salvar perfil</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
