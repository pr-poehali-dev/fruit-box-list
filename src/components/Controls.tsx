import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ControlsProps {
  onSave: () => void;
  onLoad: () => void;
  onReset: () => void;
  hasSavedData: boolean;
}

const Controls = ({ onSave, onLoad, onReset, hasSavedData }: ControlsProps) => {
  return (
    <Card className="p-4 bg-gray-800 border-gray-700 mb-6">
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={onSave}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить
        </Button>
        <Button
          onClick={onLoad}
          disabled={!hasSavedData}
          className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-600"
        >
          <Icon name="Download" size={16} className="mr-2" />
          Загрузить
        </Button>
        <Button onClick={onReset} variant="destructive">
          <Icon name="RotateCcw" size={16} className="mr-2" />
          Сбросить
        </Button>
      </div>
    </Card>
  );
};

export default Controls;
