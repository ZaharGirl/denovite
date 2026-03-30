// deno-lint-ignore-file no-sloppy-imports
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Home,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import { Link } from "wouter";

export function FloatingMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="bg-primary hover:bg-primary/30 rounded-full h-12 w-12 text-gray-50"
        >
          {/* <Menu className="scale-125" /> */}
          <Menu className="scale-150" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem className="cursor-pointer text-base">
              <Home />
              Home
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer text-base">
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-base">
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-300"/>
        <Link href="/test">
          <DropdownMenuItem className="cursor-pointer text-base">
            <Home />
            Test
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem className="cursor-pointer text-base">
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
