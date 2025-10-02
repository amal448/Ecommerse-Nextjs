"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    username: z
        .string()
        .min(2, { message: "User name must be at least 2 characters!" })
        .max(50),
    email: z.string().email({ message: "Invalid email address!" }),
    phone: z.string().min(10).max(15),
    location: z.string().min(2),
    role: z.enum(["admin", "user"]),
})

const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "amal",
            email: "amal@gmail.com",
            phone: "1233211231",
            location: "location",
            role: "admin",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Edit User</SheetTitle>
                <SheetDescription asChild>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only Admin can see Email.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only Admin can see phone.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only Admin can see location.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Only Verified Users can be Admin.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
}

export default EditUser
