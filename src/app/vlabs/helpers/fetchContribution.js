export default async function fetchContribution () {
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/vlabs-contribution`, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        },
        next: {
            revalidate: 0
        }
    })

    let data = await res.json()
    let numbers = data.data.attributes

    let contribution = [
        { number: numbers.labs_developed, label: 'Labs Developed' },
        { number: numbers.experiments_developed, label: 'Experiments Developed' },
        { number: numbers.upcoming_labs, label: 'Upcoming Labs' },
        { number: numbers.upcoming_experiments, label: 'Upcoming Experiments' },
        { number: numbers.proposed_labs, label: 'Proposed Labs' }
    ]

    return contribution
}