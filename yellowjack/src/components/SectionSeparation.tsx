
type Props = {
    titleSpan: string;
    title: string;
}

const SectionSeparation = ({ title, titleSpan }: Props) => {
  return (
    <div className="section-separation">
        <h1 className="section-separation-title"><span className="separation-span-title">{titleSpan}</span>{` ${title}`}</h1>
    </div>
  )
}

export default SectionSeparation