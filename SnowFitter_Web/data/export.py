import json

from skis import SKIS
from snowboards import SNOWBOARDS
from ski_boots import SKI_BOOTS
from snowboard_boots import BOOTS
from snowboard_bindings import SB_BINDINGS
from ski_bindings import SKI_BINDINGS


def export():
    data = {
        "skis": SKIS,
        "snowboards": SNOWBOARDS,
        "ski_boots": SKI_BOOTS,
        "snowboard_boots": BOOTS,
        "snowboard_bindings": SB_BINDINGS,
        "ski_bindings": SKI_BINDINGS
    }

    js = "// Auto-generated file — do not edit manually\n"
    js += "window.GEAR_DATA = " + json.dumps(data, indent=2) + ";\n"

    with open("../gear_data.js", "w", encoding="utf-8") as f:
        f.write(js)

    print("✅ Exported gear_data.js successfully")


if __name__ == "__main__":
    export()