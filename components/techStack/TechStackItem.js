import { Copy, CopyHeader, CopyImage } from "../base/copy/Copy"

const TechStackItem = ({image}) => {
  return (
    <article>
      <Copy variant="items">
        <CopyHeader>
          <CopyImage image={`tech-${image}`} />
        </CopyHeader>
      </Copy>
    </article>
  )
}

export default TechStackItem
