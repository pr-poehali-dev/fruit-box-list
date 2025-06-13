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
    <Card className="p-6 bg-gray-800/80 backdrop-blur-md border-gray-600 mb-8 shadow-xl">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div className="flex gap-3">
          <Button
            onClick={onSave}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить
          </Button>
          <Button
            onClick={onLoad}
            disabled={!hasSavedData}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white disabled:from-gray-600 disabled:to-gray-700 shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Icon name="Download" size={16} className="mr-2" />
            Загрузить
          </Button>
          <Button
            onClick={onReset}
            variant="destructive"
            className="shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Сбросить
          </Button>
        </div>

        <div className="text-sm text-gray-400 text-center">
          <p>💡 Перетаскивайте фрукты для создания своего тир-листа</p>
        </div>
      </div>
    </Card>
  );
};

export default Controls;
