import { motion } from "framer-motion";
import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showBack?: boolean;
  title?: string;
}

export function Header({ title = "Korean Everyday" }: HeaderProps) {
  return (
    <motion.header
      className="sticky top-0 z-50 flex items-center justify-between bg-background/80 px-6 py-4 backdrop-blur-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Button variant="ghost" size="icon" className="rounded-full">
        <Menu className="h-5 w-5" />
      </Button>

      <motion.h1
        className="font-display text-xl font-bold text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h1>

      <Button variant="ghost" size="icon" className="rounded-full">
        <User className="h-5 w-5" />
      </Button>
    </motion.header>
  );
}
