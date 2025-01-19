"use client"

import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
import { useRef } from "react"
import { useInView } from "framer-motion"


export default function Component ({ title, developed, upcoming, proposed, tooltipWidth = "" }) {
	let ref = useRef(null)
	let inView = useInView(ref, { amount: 0.5 })

	const chartData = [
		{ status: "Developed", value: parseInt(developed), fill: "var(--chart-1)" },
		{ status: "Upcoming", value: parseInt(upcoming), fill: "var(--chart-2)" },
		{ status: "Proposed", value: parseInt(proposed), fill: "var(--chart-3)" },
	]

	const chartConfig = {
		visitors: {
			label: "Visitors"
		},
		value: {
			label: title
		}
	}	

	return (
		<div className="w-full bg-sky-50 p-5 rounded-lg shadow" ref={ref}>
			<h2 className="text-2xl font-bold text-center mb-6 text-slate-600">{title}</h2>
			<ChartContainer config={chartConfig} height={200}>
				{
					inView &&
					<BarChart
						accessibilityLayer
						data={chartData.filter(d => d.value)}
						layout="vertical"
						margin={{
							right: 40
						}}
						barSize={30}
					>
						<CartesianGrid horizontal={false} />
						<YAxis
							dataKey="status"
							type="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							width={80}
						/>
						<XAxis dataKey="value" type="number" hide />
						<ChartTooltip
							cursor={false}
							wrapperStyle={{ width: tooltipWidth }}
							content={<ChartTooltipContent hideLabel className="bg-white" />}
						/>
						<Bar
							dataKey="value"
							layout="vertical"
							radius={5}
							activeBar={{ stroke: '#e0f2fe', strokeWidth: 2, strokeDasharray: 4 }}
							animationDuration={1000}
						>
							<LabelList
								position="right"
								offset={12}
								className="fill-foreground"
								fontSize={18}
							/>
						</Bar>
					</BarChart>
				}
			</ChartContainer>
		</div>
	)
}
