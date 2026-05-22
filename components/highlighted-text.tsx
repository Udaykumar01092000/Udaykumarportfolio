type HighlightedTextProps = {
  text: string;
  highlights?: string[];
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function HighlightedText({
  text,
  highlights,
}: HighlightedTextProps) {
  if (!highlights || highlights.length === 0) {
    return text;
  }

  const uniqueHighlights = [...new Set(highlights.filter(Boolean))].sort(
    (first, second) => second.length - first.length
  );

  if (uniqueHighlights.length === 0) {
    return text;
  }

  const highlightPattern = new RegExp(
    `(${uniqueHighlights.map(escapeRegExp).join("|")})`,
    "g"
  );
  const highlightSet = new Set(uniqueHighlights);

  return text.split(highlightPattern).map((part, index) =>
    highlightSet.has(part) ? (
      <strong key={`${part}-${index}`} className="font-semibold">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}
