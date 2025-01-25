"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
import { useRef } from "react"
import { useInView } from "framer-motion"

const chartConfig = {
	vlncs: {
		label: "VLNCs",
		color: "var(--chart-1)"
	},
	workshops: {
		label: "Workshops",
		color: "var(--chart-2)"
	}
}

export default function Component () {
	let ref = useRef(null)
	let inView = useInView(ref, { amount: 0.5 })

	const chartData = [
		{ year: "2014", vlncs: 8, workshops: 21 },
		{ year: "2015", vlncs: 19, workshops: 17 },
		{ year: "2016", vlncs: 27, workshops: 34 },
		{ year: "2017", vlncs: 36, workshops: 9 },
		{ year: "2018", vlncs: 43, workshops: 19 },
		{ year: "2019", vlncs: 71, workshops: 51 },
		{ year: "2020", vlncs: 283, workshops: 148 },
		{ year: "2021", vlncs: 318, workshops: 92 },
		{ year: "2022", vlncs: 401, workshops: 212 },
		{ year: "2023", vlncs: 438, workshops: 225 },
		{ year: "2024", vlncs: 213, workshops: 312 },
	]

	return (
		<div className="w-full bg-sky-50 p-5 rounded-lg shadow" ref={ref}>
			<h2 className="text-2xl font-bold text-center mb-6 text-slate-600">Outreach Activities</h2>
			<ChartContainer config={chartConfig} height={200}>
				{
					inView &&
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="year"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent className="bg-white" />}
						/>
						<Line
							dataKey="vlncs"
							type="linear"
							stroke="var(--color-vlncs)"
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey="workshops"
							type="linear"
							stroke="var(--color-workshops)"
							strokeWidth={2}
							dot={false}
						/>
						<ChartLegend 
							content={<ChartLegendContent />}
						/>
					</LineChart>
				}
			</ChartContainer>
		</div>
			
	)
}
