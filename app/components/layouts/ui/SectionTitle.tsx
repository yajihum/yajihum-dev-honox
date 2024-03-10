import { H2WithId } from './H2WithId';

export const SectionTitle = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return <H2WithId id={id} title={title} />;
};
