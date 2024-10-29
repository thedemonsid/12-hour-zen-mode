"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ZenSchema } from "@/schemas"; // Assuming the schema is defined in this path
import { zenSubmit } from "@/actions/zen-submit";

export function CreateZenPageComponent() {
  const form = useForm<z.infer<typeof ZenSchema>>({
    resolver: zodResolver(ZenSchema),
    defaultValues: {
      title: "",
      description: "",
      preZenPlan: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ZenSchema>) => {
    console.log("Form Data:", data);
    const response = await zenSubmit(data);
    console.log("Response:", response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-2">
          Create Your Zen Session
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Set your focus goals, jot down a pre-plan, and prepare for a
          distraction-free 12 hours.
        </p>

        <Card className="bg-gray-800 border-gray-700 mb-6">
          <CardHeader>
            <CardTitle className="text-blue-500">Session Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                label="Zen Title"
                form={form}
                name="title"
                placeholder="Enter your session title"
              />
              <FormField
                label="Zen Description"
                form={form}
                name="description"
                placeholder="Briefly describe your session goals"
                isTextarea
              />

              <Card className="bg-gray-800 border-gray-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-blue-500">Pre-Zen Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    form={form}
                    name="preZenPlan"
                    placeholder="Use markdown to outline your session plan..."
                    isTextarea
                    rows={6}
                  />
                </CardContent>
              </Card>
              {/* Submit Button */}
              <Button
                type="submit" // Triggers form submission
                size="lg"
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Start Zen Session
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// FormField Component for modular input handling
const FormField = ({
  label,
  form,
  name,
  placeholder,
  isTextarea = false,
  rows,
}: {
  label?: string;
  form: any;
  name: string;
  placeholder: string;
  isTextarea?: boolean;
  rows?: number;
}) => {
  return (
    <div className="space-y-2">
      {label && <Label className="text-gray-300">{label}</Label>}
      {isTextarea ? (
        <Textarea
          {...form.register(name)}
          placeholder={placeholder}
          rows={rows}
          className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      ) : (
        <Input
          {...form.register(name)}
          placeholder={placeholder}
          className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        />
      )}
      <p className="text-red-500">{form.formState.errors[name]?.message}</p>
    </div>
  );
};
