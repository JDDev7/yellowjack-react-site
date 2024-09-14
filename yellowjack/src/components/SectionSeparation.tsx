
type Props = {
    titleSpan: string;
    title?: string;
}

const SectionSeparation = ({ title, titleSpan }: Props) => {
  const renderTitle = title || ''; // Use an empty string if title is undefined

  return (
    <div className="section-separation">
        <h1 className="section-separation-title"><span className="separation-span-title">{titleSpan}</span>{`${renderTitle}`}</h1>
    </div>
  )
}

export default SectionSeparation