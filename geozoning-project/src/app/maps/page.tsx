import React from 'react'
import Sidebar from '@/components/maps/sidebar'
import Geomaps from '@/components/maps/geomaps'
import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/UI/button"
const page = () => {
    return (
        <div>
            page
            hello g
            <Sidebar />
            hello kitty
            <Geomaps />
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <Button variant="outline">Button</Button>
                <Button variant="outline" size="icon" aria-label="Submit">
                    <ArrowUpRightIcon />
                </Button>
            </div>
        </div>
    )
}

export default page