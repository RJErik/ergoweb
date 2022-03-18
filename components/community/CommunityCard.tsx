import { getIconComponentByName } from "../../utils/icons-map";

type Props = {
  title: string;
  icon: string;
  text: string;
};

export default function CommunityCard({ title, icon, text }: Props) {
  return (
    <div className="rounded-xl px-9 py-8 card-bg dark:border-brand-orange border">
      <div className="w-56 h-28">
        <div className="flex mb-4">
          <span className="mt-auto mb-auto">
            {getIconComponentByName(icon)}
          </span>
          <span className="mt-auto mb-auto ml-3">
            <p className="font-vinila-extended text-[24px]">
              <b>{title}</b>
            </p>
          </span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
