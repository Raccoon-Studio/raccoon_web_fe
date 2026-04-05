/* Drag-and-drop / click-to-browse file upload zone. */
"use client";

import { useCallback, useRef, useState } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { verificationFields } from "@/data/auth/signup.data";
import type { FileUploadZoneProps } from "@/lib/auth/signup.types";
import { cn } from "@/lib/utils";

export default function FileUploadZone({
  onFileSelect,
  fileName,
  fileSize,
  accept,
  maxSizeMB,
  error,
}: FileUploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(2)} MB`;
  };

  const handleFile = useCallback(
    (file: File) => {
      if (file.size > maxSizeMB * 1024 * 1024) return;
      onFileSelect(file);
    },
    [maxSizeMB, onFileSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const { upload } = verificationFields;

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-on-surface">{upload.label}</p>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        aria-label={upload.label}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-6 ssm:p-8 cursor-pointer transition-all duration-300",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border bg-surface-container-low hover:border-primary/40 hover:bg-surface-container",
          error && "border-destructive"
        )}
      >
        {fileName ? (
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-sm font-medium text-on-surface truncate max-w-[200px] ssm:max-w-[280px]">
                {fileName}
              </p>
              {fileSize && (
                <p className="text-xs text-on-surface-variant">
                  {formatSize(fileSize)}
                </p>
              )}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                onFileSelect(null as unknown as File);
              }}
              className="h-8 w-8 text-on-surface-variant hover:text-destructive"
              aria-label="Remove file"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <Upload className="h-8 w-8 text-on-surface-variant" />
            <p className="text-sm text-on-surface-variant text-center">
              {upload.dragLabel}{" "}
              <span className="font-semibold text-primary underline underline-offset-4">
                {upload.browseLabel}
              </span>
            </p>
            <p className="text-xs text-on-surface-variant/70">
              {upload.description}
            </p>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="sr-only"
          aria-hidden="true"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}