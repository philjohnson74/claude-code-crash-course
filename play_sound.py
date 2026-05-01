import subprocess
from pathlib import Path

SOUND = Path(__file__).parent / "FinishedProcessing.wav"


def main():
    subprocess.run(["afplay", str(SOUND)], check=True)


if __name__ == "__main__":
    main()
