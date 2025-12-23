import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_URL = "https://formspree.io/f/meejlrqa";

export function InterestForm({ role = "participant" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role,
          message: message.trim(),
          source: "Hook 'Em Hacks website",
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("saved");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Name (optional)</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Longhorn Legend"
          />
        </div>

        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@utexas.edu"
            type="email"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Message (optional)</Label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're excited about (AI, fintech, healthcare, climate, etc.)"
          className="min-h-24 resize-none"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="rounded-2xl px-6"
        >
          {status === "sending"
            ? "Sending..."
            : status === "saved"
              ? "Sent!"
              : status === "error"
                ? "Failed - try again"
                : "Submit interest"}
        </Button>

        <div className="text-sm text-muted-foreground">
          Prefer email? <span className="text-foreground">hookemhacks@gmail.com</span>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Submissions are emailed to hookemhacks@gmail.com.
      </p>
    </form>
  );
}
