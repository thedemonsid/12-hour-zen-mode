import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  backButtonLabel: string;
  backButtonMessage: string;
  backButtonHref: string;
  showsocial: boolean;
}

export function CardWrapper({
  children,
  title = "Hello There",
  description = "Welcome to the new platform",
  backButtonMessage,
  backButtonHref,
  showsocial,
  backButtonLabel,
}: Props) {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="absolute inset-0 -z-10 overflow-auto">
        <div className="absolute top-0 -left-2 w-48 h-48 md:w-72 md:h-72 md:-left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-2 w-48 h-48 md:w-72 md:h-72 md:-right-4 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-4 left-12 w-48 h-48 md:w-72 md:h-72 md:-bottom-8 md:left-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 z-10">
        <Card className="w-full max-w-md border-none">
          <CardHeader className="space-y-1 flex flex-col items-center">
            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600 text-center">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {children}
            <div className="mt-6 text-center">
              {showsocial && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="w-full border border-purple-200 hover:bg-gray-50 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border border-purple-200 hover:bg-gray-50 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#24292F">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </Button>
                </div>
              )}
            </div>
            <div className="text-center mt-6">
              <span className="text-gray-600 text-sm">{backButtonMessage}</span>{" "}
              <a
                href={backButtonHref}
                className="text-blue-600 hover:text-blue-500 text-sm font-medium"
              >
                {backButtonLabel}
              </a>
            </div>
          </CardContent>{" "}
        </Card>
      </div>
    </div>
  );
}
