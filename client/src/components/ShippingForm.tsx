import { ShippingFormInputs, shippingFormSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"

const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema)
  })
  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data)
    router.push("/cart?step=3", { scroll: false })
  }
  return (
    <form onSubmit={handleSubmit(handleShippingForm)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">Name</label>
        <input type="text" className="border-b border-gray-200 py-2 outline-none text-sm"
          id="name" placeholder="John Doe" {...register("name")} />
        {errors.name &&
          <p className="text-xs text-red-500"> {errors.name.message}</p>
        }
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">Email</label>
        <input type="email" className="border-b border-gray-200 py-2 outline-none text-sm"
          id="email" placeholder="john@email.com" {...register("email")} />
        {errors.email &&
          <p className="text-xs text-red-500"> {errors.email.message}</p>
        }
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone Number" className="text-xs text-gray-500 font-medium">phone Number</label>
        <input type="text" className="border-b border-gray-200 py-2 outline-none text-sm"
          id="phone" placeholder="phone" {...register("phone")} />
        {errors.phone &&
          <p className="text-xs text-red-500"> {errors.phone.message}</p>
        }
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Address" className="text-xs text-gray-500 font-medium">Address</label>
        <input type="text" className="border-b border-gray-200 py-2 outline-none text-sm"
          id="address" placeholder="123 Main st.Antony" {...register("address")} />
        {errors.address &&
          <p className="text-xs text-red-500"> {errors.address.message}</p>
        }
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="City" className="text-xs text-gray-500 font-medium">City</label>
        <input type="text" className="border-b border-gray-200 py-2 outline-none text-sm"
          id="city" placeholder="Bombay" {...register("city")} />
        {errors.city &&
          <p className="text-xs text-red-500"> {errors.city.message}</p>
        }
      </div>

      <button className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex justify-center items-center gap-2  ">
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  )
}

export default ShippingForm