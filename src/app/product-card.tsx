"use client"

import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Heart, ShoppingBag, Eye, Plus} from "lucide-react"
import {useState} from "react"
import Image from "next/image";

export default function ProductCard() {
    const [isHovered, setIsHovered] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isPressed, setIsPressed] = useState(false)


    return (
        <div className="w-full max-w-md mx-auto p-4">
            <Card
                className={`relative overflow-hidden border-0 bg-white shadow-md transition-all duration-500 cursor-pointer ${
                    isHovered ? "shadow-xl" : ""
                } ${isPressed ? "scale-98" : "hover:scale-102"}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
            >
                <div className="relative h-80 overflow-hidden bg-gray-100">
                    <Image
                        height='400'
                        width='300'
                        src="/sneaker-1.png"
                        alt="Modern Sneakers"
                        className="w-full h-full object-cover transition-all duration-700 ease-out"
                    />

                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-500 ${
                            isHovered ? "opacity-100" : "opacity-0"
                        }`}
                    />

                    <Badge
                        className="absolute top-4 left-4 bg-gray-700 text-white border-0 font-medium uppercase">new</Badge>

                    <Button
                        variant="ghost"
                        size="icon"
                        className={`absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 ${
                            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                        } ${isLiked ? "text-red-500" : "text-gray-700"} hover:bg-white hover:scale-110`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsLiked(!isLiked)
                        }}
                    >
                        <Heart className={`h-5 w-5 transition-all duration-300 ${isLiked ? "fill-current" : ""}`}/>
                    </Button>

                    <div
                        className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-500 ${
                            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                    >
                        <Button
                            className="flex-1 bg-white text-gray-900 hover:bg-gray-100 border-0 h-11 font-medium transition-all duration-300 hover:scale-105"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Eye className="h-4 w-4 mr-2"/>
                            Quick View
                        </Button>
                        <Button
                            size="icon"
                            className="h-11 w-11 bg-gray-900 hover:bg-gray-800 text-white border-0 transition-all duration-300 hover:scale-105 hover:rotate-90"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Plus className="h-5 w-5"/>
                        </Button>
                    </div>
                </div>

                <div className="p-6 space-y-3">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">Rick Owens </p>
                        <h3 className="font-semibold text-lg text-gray-900 leading-tight">Rick Owens Geobasket Sneakers
                            Black </h3>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        A wearable work of art for your feet. Comfort and attitude, all in one, redefines luxury
                        footwear with its iconic, avant-garde design, offering a uniquely
                        stylish and comfortable experience for any activity.
                    </p>

                    <div className="flex items-center justify-between pt-2">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-gray-900">$2000</span>
                                <span className="text-sm text-gray-500 line-through">$1500</span>
                            </div>
                            <p className="text-xs text-emerald-600 font-medium">Free shipping</p>
                        </div>

                        <Button
                            size="icon"
                            className="h-12 w-12 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ShoppingBag className="h-5 w-5"/>
                        </Button>
                    </div>
                </div>

                <div
                    className={`absolute inset-0 border-2 border-gray-900 transition-all duration-500 pointer-events-none ${
                        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                />
            </Card>
        </div>
    )
}
