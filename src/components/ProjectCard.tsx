import Image from 'next/image'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <Image src={imageUrl || "/placeholder.svg"} alt={title} width={300} height={200} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

